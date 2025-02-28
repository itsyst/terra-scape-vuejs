// src/composables/usePayPal.ts
import { loadScript } from '@paypal/paypal-js';
import apiService from '../services/api';

interface PayPalOrderResponse {
	id: string;
	status: string;
	links: Array<{
		href: string;
		rel: string;
		method: string;
	}>;
}

export function usePayPal() {
	const initializePayment = async (amount: number) => {
		try {
			await loadScript({
				clientId: import.meta.env.VITE_PAYPAL_CLIENT_ID,
				currency: 'SEK',
				intent: 'capture'
			});

			const response = await apiService.post<PayPalOrderResponse>(
				'/api/paypal/create-order',
				{ price: amount, currency: 'SEK' }
			);

			// Access data through response.data
			const order = response.data;

			if (!order?.id) {
				throw new Error('Invalid order response');
			}

			// Window dimensions
			const width = 500;
			const height = 700;

			// Calculate position to center the window
			const left = (window.screen.width - width) / 2;
			const top = (window.screen.height - height) / 2;

			// Open payment URL in a new centered window
			const paymentUrl = `${import.meta.env.VITE_PAYPAL_URL}/checkoutnow?token=${
				order.id
			}`;
			window.open(
				paymentUrl,
				'_blank',
				`noopener,noreferrer,width=${width},height=${height},left=${left},top=${top}`
			);
		} catch (error) {
			console.error('Payment failed:', error);
			throw new Error('Payment initialization failed');
		}
	};

	return { initializePayment };
}
