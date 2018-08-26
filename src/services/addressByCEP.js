const addressByCEP = async (cep) => {
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    return await response.json();
  } catch (e) {
    console.error(e);
    return null;
  }
};

export default addressByCEP;
