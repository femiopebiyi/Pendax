// paystackVerify.ts
import axios from "axios";

export interface PaystackBankData {
  account_number: string;
  account_name: string;
  bank_id: number;
}

export interface PaystackResponse {
  status: boolean;
  message: string;
  data: PaystackBankData;
}

/**
 * Verifies a Nigerian bank account using Paystack API
 * @param accountNumber - The bank account number as string (with leading zeros)
 * @param bankCode - The 3-digit bank code
 * @returns PaystackResponse
 */
export async function verifyBankAccount(
  accountNumber: string,
  bankCode: string
): Promise<PaystackResponse> {
  try {
    const response = await axios.get<PaystackResponse>(
      `https://api.paystack.co/bank/resolve?account_number=${accountNumber}&bank_code=${bankCode}`,
      {
        headers: {
          Authorization:
            "Bearer sk_test_e19c28c99e1e6db5ba3a27265011ff638d273438",
        },
      }
    );

    return response.data;
  } catch (error: any) {
    // Provide detailed error info
    console.error(
      "Paystack verification error:",
      error.response?.data || error.message
    );
    throw error;
  }
}
