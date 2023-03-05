const getPomosFromBackend = async () => {
  const res = await fetch('http://localhost:8000/pomos')
  const data = res.json()
  return data
}