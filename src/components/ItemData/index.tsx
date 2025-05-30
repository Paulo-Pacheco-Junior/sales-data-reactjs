import { useEffect, useState } from "react";
import { Container } from "./styles";

type ItemDataProps = {
  storageKey: string;
};

export function ItemData({ storageKey }: ItemDataProps) {
  const getInitialData = () => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return {};
      }
    }
    return {};
  };

  const initialData = getInitialData();

  const [cpfCnpj, setCpfCnpj] = useState(initialData.cpfCnpj || "");
  const [customerName, setCustomerName] = useState(
    initialData.customerName || ""
  );
  const [birth, setBirth] = useState(initialData.birth || "");
  const [motherName, setMotherName] = useState(initialData.motherName || "");
  const [phone, setPhone] = useState(initialData.phone || "");
  const [email, setEmail] = useState(initialData.email || "");
  const [plan, setPlan] = useState(initialData.plan || "");
  const [adress, setAdress] = useState(initialData.adress || "");

  useEffect(() => {
    const savedData = localStorage.getItem(storageKey);
    if (savedData) {
      const parsed = JSON.parse(savedData);
      setCpfCnpj(parsed.cpfCnpj || "");
      setCustomerName(parsed.customerName || "");
      setBirth(parsed.birth || "");
      setMotherName(parsed.motherName || "");
      setPhone(parsed.phone || "");
      setEmail(parsed.email || "");
      setPlan(parsed.plan || "");
      setAdress(parsed.adress || "");
    }
  }, [storageKey]);

  useEffect(() => {
    const data = {
      cpfCnpj,
      customerName,
      birth,
      motherName,
      phone,
      email,
      plan,
      adress,
    };
    localStorage.setItem(storageKey, JSON.stringify(data));
  }, [
    cpfCnpj,
    adress,
    customerName,
    birth,
    motherName,
    phone,
    email,
    plan,
    storageKey,
  ]);

  return (
    <Container>
      <div>
        <label>
          CPF/CNPJ:
          <input
            type="text"
            placeholder="..."
            value={cpfCnpj}
            onChange={(e) => setCpfCnpj(e.target.value)}
          />
        </label>

        <label>
          Endereço:
          <textarea
            placeholder="..."
            value={adress}
            onChange={(e) => setAdress(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Nome do Cliente:
          <input
            type="text"
            placeholder="..."
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />
        </label>

        <label>
          Data de Nascimento:
          <input
            type="text"
            placeholder="..."
            value={birth}
            onChange={(e) => setBirth(e.target.value)}
          />
        </label>

        <label>
          Nome da Mãe:
          <input
            type="text"
            placeholder="..."
            value={motherName}
            onChange={(e) => setMotherName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Whatsapp:
          <input
            type="text"
            placeholder="..."
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>

        <label>
          Email:
          <input
            type="text"
            placeholder="..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>
          Plano:
          <input
            type="text"
            placeholder="..."
            value={plan}
            onChange={(e) => setPlan(e.target.value)}
          />
        </label>
        {/* <div className="buttons">
            <NewSaleBtn type="submit">Salvar</NewSaleBtn>
          </div> */}
      </div>
    </Container>
  );
}
