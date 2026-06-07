export const getServices = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Corte de Cabello", price: "$250", duration: "45 min" },
        { id: 2, name: "Manicura Gelish", price: "$300", duration: "60 min" },
        { id: 3, name: "Keratina", price: "$800", duration: "120 min" },
      ]);
    }, 1500); 
  });
};