const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function getDivision() {
  const response = await fetch(`${API_BASE_URL}/api/divisions`);

  if (!response.ok) {
    throw new Error("Gagal mengambil data divisions");
  }

  return response.json();
}
