export type ProductData = {
    // Define aquí el tipo de los datos que esperas recibir de la API
    // Ejemplo:
    // results: Array<{
    //   id: string;
    //   name: string;
    // }>;
  };
  
  export async function getProductsApi(): Promise<ProductData | null> {
    try {
      const response = await fetch('https://api.fda.gov/drug/label.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const JSONdata = await response.json();
      return JSONdata;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  }
  