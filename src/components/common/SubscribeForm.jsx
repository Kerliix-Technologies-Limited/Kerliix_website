import React, { useState } from 'react';
import toast from 'react-hot-toast';
import API from '../../api.js';

const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    setLoading(true);
    try {
      const res = await API.post('/newsletter/subscribe', { email });

      if (res.status === 200) {
        toast.success(res.data.message || 'Successfully subscribed!');
        setEmail('');
      } else {
        toast.error(res.data.message || 'Subscription failed.');
      }
    } catch (err) {
      toast.error(err.response?.data?.error || 'Something went wrong. Try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubscribe}
      className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto sm:mx-0"
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        required
        className="w-full sm:w-72 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
      />
      <button
        type="submit"
        disabled={loading}
        className="px-6 py-2 bg-gradient-to-br from-blue-900 to-gray-700 text-white rounded-md hover:from-blue-800 hover:to-gray-600 transition disabled:opacity-50"
      >
        {loading ? 'Subscribing...' : 'Subscribe'}
      </button>
    </form>
  );
};

export default SubscribeForm;
