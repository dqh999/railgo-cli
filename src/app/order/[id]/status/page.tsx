export default async function OrderStatusPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = await params


  return (
    <div>
      <h1>Order Status</h1>
      <p>Order ID: {id}</p>
    </div>
  )
}

