export const sendContactForm = async ({ email, subject, message, text, file, formType, replyTo }) => {
  console.log("Sending form:", { email, subject, message, text, file, formType });

  try {
    const formData = new FormData();
    formData.append("wxmail", "true");
    formData.append("email", email);
    formData.append("subject", subject);
    formData.append("message", text || message);
    formData.append("html", message);
    formData.append("form_type", formType || "contact"); 

    if (file) {
      formData.append("attachment", file);
    }

    const response = await fetch("https://weboum.com/email-api/", {
      method: "POST",
      body: formData,
    });

    const responseText = await response.text();
    console.log("Raw API response:", responseText);

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}: ${responseText}`);
    }

    let responseData;
    try {
      responseData = JSON.parse(responseText);
      console.log("Parsed API response:", responseData);
    } catch {
      console.log("Response not in JSON format");
    }

    return { success: true, message: "Email sent successfully" };
  } catch (error) {
    console.error("Email sending error:", error);
    return { success: false, message: error.message };
  }
};
