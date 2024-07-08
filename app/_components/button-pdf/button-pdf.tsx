'use client'

const ButtonPDF = () => {
  const handleGeneratePDF = async () => {
    const res = await fetch("/api/generate-pdf", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST", // You probably can use get aswell, you can use a post request with a custom body to generate dynamic data in your pdf view, I am going to cover that in a different post :)
    })
    return res.json()
  }

  return (
    <button onClick={handleGeneratePDF}>Generate PDF</button>
  )
}

export default ButtonPDF