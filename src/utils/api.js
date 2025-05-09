// In utils/api.js
export const sendContactForm = async ({ email, subject, message }) => {
  console.log("Sending contact form submission:", { email, subject });

  try {
    const formData = new FormData();
    formData.append("wxmail", "true");
    formData.append("to", "support@weboum.com");
    formData.append("from", "no-reply@weboum.com");
    formData.append("to", "yourpersonalemail@gmail.com");
    formData.append("reply-to", email);
    formData.append("email", email);
    formData.append("subject", subject);
    formData.append("html", message);
    const plainTextExtract = message
      .replace(/<[^>]*>/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    formData.append("message", plainTextExtract);
    formData.append("isHtml", "true");
    formData.append("content-type", "text/html");

   
    
    // Log the data being sent to the API for debugging
    console.log("Sending to API with data:", {
      wxmail: "true",
      to: "support@weboum.com",
      from: "no-reply@weboum.com",
      "reply-to": email,
      email,
      subject,
      html: message.substring(0, 100) + "...",
      message: message.replace(/<[^>]*>/g, " ").substring(0, 100) + "...",
      isHtml: "true",
      "content-type": "text/html",
      attachment: attachment ? attachment.name : "No attachment",
    });

    const response = await fetch("https://weboum.com/email-api/", {
      method: "POST",
      body: formData,
    });

    const responseText = await response.text(); // Get raw response text
    console.log("Raw API response:", responseText);

    if (!response.ok) {
      console.error("API error response:", responseText);
      throw new Error(`API request failed with status ${response.status}: ${responseText}`);
    }

    let responseData;
    try {
      responseData = JSON.parse(responseText);
    } catch (parseError) {
      console.error("Failed to parse JSON response:", parseError);
      throw new Error("Invalid JSON response from API");
    }

    console.log("Parsed API response:", responseData);
    return { success: true, message: "Email sent successfully" };
  } catch (error) {
    console.error("Email sending error:", error);
    return { success: false, message: error.message };
  }
};