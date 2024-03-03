'use client';
import { ReactNode } from "react"
import { CartProvider as USCProvider } from "use-shopping-cart"

const CartProvider = ({children}: {children: ReactNode}) => {
  return (
    <>
      <USCProvider 
      mode="payment" cartMode="client-only" 
      stripe={process.env.NEXT_PUBLIC_STRIP_KEY as string }
      successUrl="https://e-commerce-app-phi-vert.vercel.app/stripe/success"
      cancelUrl="https://e-commerce-app-phi-vert.vercel.app/stripe/error"
      currency="USD"
      billingAddressCollection={true}
      shouldPersist={true}
      language="en-US"
      >
        {children}
      </USCProvider>
    </>
  )
}

export default CartProvider