import { ItemData } from "../../components/ItemData";
import { Container } from "./styles";

export function NewSale() {
  return (
    <Container>
      {Array.from({ length: 15 }).map((_, index) => (
        <ItemData key={index} storageKey={`@data-${index}`} />
      ))}
    </Container>
  );
}
