export const sendContactForm = async ({ email, subject, message, text }) => {
  console.log("Sending contact form submission:", { email, subject, message, text });

  try {
    // Create JSON payload
    const jsonData = {
      wxmail: true,
      to: "support@weboum.com",
      cc: "yourpersonalemail@gmail.com",
      from: "no-reply@weboum.com",
      replyTo: email,
      email: email,
      subject: subject,
      message: text, 
      html: message, 
      isHtml: true
      
    };

    console.log("Sending to API with data:", jsonData);
    
    // Make the API request with JSON
    const response = await fetch("https://weboum.com/email-api/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(jsonData)
    });

    const responseText = await response.text();
    console.log("Raw API response:", responseText);

    if (!response.ok) {
      console.error("API error response:", responseText);
      throw new Error(`API request failed with status ${response.status}: ${responseText}`);
    }

    // Try to parse as JSON
    let responseData;
    try {
      responseData = JSON.parse(responseText);
      console.log("Parsed API response:", responseData);
    } catch (parseError) {
      console.log("Response is not JSON format, but request was successful");
    }
    
    return { success: true, message: "Email sent successfully" };
  } catch (error) {
    console.error("Email sending error:", error);
    return { success: false, message: error.message };
  }
};