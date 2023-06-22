function ContactCard({ name, phone, zip, city, email }) {
  return (
    <div className="card">
      <p>Name: {name}</p>
      <ul>
        <li>Phone: {phone}</li>
        <li>Zip: {zip}</li>
        <li>City: {city}</li>
        <li>Email: {email}</li>

      </ul>

    </div>
  );
}
export default ContactCard;
