import React from 'react'

interface PageProps {
  params: {
    id: string
  }
}

export default async function OrderStatusPage({ params }: PageProps) {
  const { id } = params

  return (
    <div>
      <h1>Order Status</h1>
      <p>Order ID: {id}</p>
      {/* Add more content here */}
    </div>
  )
}

