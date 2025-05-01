export const sendContactForm = async ({ email, subject, message }) => {
    const formData = new FormData();
    formData.append("wxmail", "true");
    formData.append("email", email);
    formData.append("subject", subject);
    formData.append("message", message);
  
    const response = await fetch("https://weboum.com/email-api/", {
      method: "POST",
      body: formData,
    });
  
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
  
    return response.json();
  };