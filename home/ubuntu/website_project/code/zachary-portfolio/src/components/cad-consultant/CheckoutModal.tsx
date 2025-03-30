'use client';

import { useState } from 'react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: {
    name: string;
    price: number;
  };
}

export default function CheckoutModal({ isOpen, onClose, plan }: CheckoutModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cardNumber: '',
    expiry: '',
    cvc: '',
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsComplete(true);
      
      // Reset and close after showing success message
      setTimeout(() => {
        setIsComplete(false);
        onClose();
        setFormData({
          name: '',
          email: '',
          cardNumber: '',
          expiry: '',
          cvc: '',
        });
      }, 3000);
    }, 2000);
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          disabled={isProcessing}
        >
          ✕
        </button>
        
        {isComplete ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-green-500 text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Payment Successful!</h3>
            <p className="text-gray-600">
              Thank you for your purchase. You will receive a confirmation email shortly.
            </p>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Checkout</h2>
            
            <div className="bg-light-gray p-4 rounded-lg mb-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">{plan.name}</h3>
                  <p className="text-sm text-gray-500">
                    {plan.name === 'Pay-Per-Analysis' ? 'One-time payment' : 'Monthly subscription'}
                  </p>
                </div>
                <div className="text-xl font-bold">${plan.price}</div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                  disabled={isProcessing}
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                  disabled={isProcessing}
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Card Number
                </label>
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  placeholder="1234 5678 9012 3456"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                  disabled={isProcessing}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    name="expiry"
                    value={formData.expiry}
                    onChange={handleChange}
                    placeholder="MM/YY"
                    className="w-full p-3 border border-gray-300 rounded-md"
                    required
                    disabled={isProcessing}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    CVC
                  </label>
                  <input
                    type="text"
                    name="cvc"
                    value={formData.cvc}
                    onChange={handleChange}
                    placeholder="123"
                    className="w-full p-3 border border-gray-300 rounded-md"
                    required
                    disabled={isProcessing}
                  />
                </div>
              </div>
              
              <button
                type="submit"
                className="btn w-full"
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <span className="flex items-center justify-center">
                    <span className="inline-block animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-2"></span>
                    Processing...
                  </span>
                ) : (
                  `Pay $${plan.price}`
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
