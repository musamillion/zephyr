export default function SuggestionsPage() {
  return (
    <main>
      <section className="page-header">
        <p className="eyebrow">Suggestions</p>
        <h1>Passenger suggestions</h1>
        <p>Tell the AER team what would make your journey through the airport better.</p>
      </section>
      <section className="page-body">
        <form className="card" action="/suggestions">
          <label htmlFor="suggestion">
            <strong>Your suggestion</strong>
          </label>
          <textarea
            id="suggestion"
            name="suggestion"
            rows={6}
            style={{ display: "block", marginTop: 12, width: "100%" }}
          />
          <div className="actions">
            <button className="button" type="submit">
              Send Suggestion
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
