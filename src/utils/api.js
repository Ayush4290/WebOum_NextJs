// utils/api.js
export const sendContactForm = async ({ email, subject, message }) => {
  console.log("Sending email details:", { email, subject });
 
  try {
    const formData = new FormData();
    formData.append("wxmail", "true");
   
    // Properly specify the recipient (the subscriber's email)
    formData.append("to", email);
   
    // Use a verified sending domain
    formData.append("from", "newsletter@weboum.com");

    // Keep the tracking email
    formData.append("email", email);
   
    // Make sure subject is properly set
    formData.append("subject", subject);
   
    // IMPORTANT: Convert the HTML template to plain text for message parameter
    // Your API might be expecting plaintext in the "message" field and handling HTML separately
    const plainTextMessage = "Thank you for subscribing to our newsletter! You'll now receive the latest updates, tips, and exclusive offers from Weboum Technology.";
    formData.append("message", plainTextMessage);
   
    // Add HTML content in a separate parameter - this is likely what's missing
    formData.append("html", message);
   
    // Add flag to indicate this is HTML email
    formData.append("isHtml", "true");
   
    console.log("Sending to API with data:", {
      to: email,
      from: "newsletter@weboum.com",
      subject: subject
    });
   
    // Make sure the Content-Type is properly set for FormData
    const response = await fetch("https://weboum.com/email-api/", {
      method: "POST",
      body: formData
    });
   
    // Handle the response
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API request failed with status ${response.status}: ${errorText}`);
    }
   
    const responseData = await response.json();
    console.log("API response:", responseData);
   
    return responseData;
  } catch (error) {
    console.error("Email sending error:", error);
    throw error;
  }
};