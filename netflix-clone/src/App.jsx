export default function App() {
  return (
    <>
     <h1>Netflix Subscription</h1>
  <form id="subscription-form">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required />

    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required />

    <label for="plan">Select Plan:</label>
    <select id="plan" name="plan" required>
      <option value="basic">Basic - $199/month</option>
      <option value="standard">Standard - $499/month</option>
      <option value="premium">Premium - $649/month</option>
    </select>

    <button type="submit">Subscribe</button>
  </form>

  <script>
    document.getElementById('subscription-form').addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Perform validation and subscription logic here
      alert('Subscription successful!'); // Replace with actual subscription logic
    });
  </script>
    </>

  )
}
