import Accordion from "./components/Accordion/Accordion";
import Place from "./components/Place.jsx";
import SearchableList from "./components/SearchableList/SearchableList";
import { PLACES } from "./Places.js";

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordion className="accordion">
          <Accordion.Item id="a1" className="accordion-item">
            <Accordion.Title className="accordion-item-title">
              We got 20 years of experience
            </Accordion.Title>
            <Accordion.Content className="accordion-item-content">
              <article>
                <p>You can not go wrong with us.</p>
                <p>
                  We are in the business of planning highly individualized
                  vacation trips for more than 20 years.
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item id="a2" className="accordion-item">
            <Accordion.Title className="accordion-item-title">
              We are working with local guides.
            </Accordion.Title>
            <Accordion.Content className="accordion-item-content">
              <article>
                <p>We are not going alone</p>
                <p>We are working with local guides.</p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </section>
      <section>
        <SearchableList items={PLACES} itemKeyFn={(item) => item.id}>
          {(item) => <Place item={item} />}
        </SearchableList>
        <SearchableList items={["item-1", "item-2"]} itemKeyFn={(item) => item}>
          {(item) => item.toString()}
        </SearchableList>
      </section>
    </main>
  );
}

export default App;
