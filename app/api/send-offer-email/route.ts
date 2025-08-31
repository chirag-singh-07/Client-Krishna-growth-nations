import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email } = await req.json();

    if (!name || !email) {
      return new Response("Missing required fields", { status: 400 });
    }
    // Replace with actual course ID for the offer
    const courseLink =
      "https://drive.google.com/file/d/1kJg-0B2Kss-yeVBIiQ1vz_5jkC63wuww/view?usp=sharing";

    const courseTitle = "Pack of 90+ courses";

    const data = await resend.emails.send({
      from: "Growth Nation <noreply@growthnations.in>",
      to: email,
      subject: `Access Link for ${courseTitle}`,
      html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Course Purchase Confirmation</title>
    <style>
        /* Reset styles for email clients */
        body, table, td, p, a, li, blockquote {
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
        }
        table, td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        img {
            -ms-interpolation-mode: bicubic;
            border: 0;
            height: auto;
            line-height: 100%;
            outline: none;
            text-decoration: none;
        }
        
        /* Responsive styles */
        @media only screen and (max-width: 600px) {
            .container {
                width: 100% !important;
                max-width: 100% !important;
            }
            .content {
                padding: 20px !important;
            }
            .header {
                padding: 30px 20px !important;
            }
            .button {
                width: 100% !important;
                padding: 18px 20px !important;
                font-size: 18px !important;
            }
        }
    </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
    
    <!-- Main Container -->
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f8fafc;">
        <tr>
            <td style="padding: 40px 20px;">
                
                <!-- Email Container -->
                <table class="container" role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="margin: 0 auto; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
                    
                    <!-- Header with Gradient -->
                    <tr>
                        <td class="header" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center; border-radius: 12px 12px 0 0;">
                            <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; line-height: 1.2;">
                                🎉 Welcome to Your Course!
                            </h1>
                        </td>
                    </tr>
                    
                    <!-- Main Content -->
                    <tr>
                        <td class="content" style="padding: 40px 30px;">
                            
                            <!-- Greeting -->
                            <p style="margin: 0 0 20px 0; font-size: 18px; line-height: 1.6; color: #374151;">
                                Hi <strong>${name}</strong>,
                            </p>
                            
                            <!-- Thank you message -->
                            <p style="margin: 0 0 25px 0; font-size: 16px; line-height: 1.6; color: #374151;">
                                Thank you so much for purchasing <strong style="color: #667eea;">${courseTitle}</strong>! We're thrilled to have you join our learning community.
                            </p>
                            
                            <p style="margin: 0 0 35px 0; font-size: 16px; line-height: 1.6; color: #374151;">
                                Your course is now ready and waiting for you. Click the button below to start your learning journey right away!
                            </p>
                            
                            <!-- Call-to-Action Button -->
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                <tr>
                                    <td style="text-align: center; padding: 20px 0;">
                                        <a href="${courseLink}" target="_blank" class="button" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; padding: 16px 32px; border-radius: 8px; font-size: 16px; font-weight: 600; text-align: center; min-width: 200px; box-shadow: 0 4px 14px 0 rgba(102, 126, 234, 0.4); transition: all 0.3s ease;">
                                            Access Your Course Now →
                                        </a>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Additional Info -->
                            <div style="background-color: #f8fafc; padding: 25px; border-radius: 8px; margin: 30px 0;">
                                <h3 style="margin: 0 0 15px 0; font-size: 18px; color: #374151; font-weight: 600;">
                                    What's Next?
                                </h3>
                                <ul style="margin: 0; padding-left: 20px; color: #6b7280; font-size: 14px; line-height: 1.6;">
                                    <li style="margin-bottom: 8px;">Access your course materials anytime, anywhere</li>
                                    <li style="margin-bottom: 8px;">Join our community discussions and connect with fellow learners</li>
                                    <li style="margin-bottom: 8px;">Track your progress and access course completion details</li>
                                </ul>
                            </div>
                            
                            <p style="margin: 25px 0 0 0; font-size: 14px; line-height: 1.6; color: #6b7280;">
                                If you have any questions or need assistance, don't hesitate to reach out to our support team. We're here to help you succeed!
                            </p>
                            
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #f8fafc; padding: 30px; text-align: center; border-radius: 0 0 12px 12px; border-top: 1px solid #e5e7eb;">
                            <p style="margin: 0; font-size: 16px; color: #374151; font-weight: 500;">
                                Happy learning! – <span style="color: #667eea; font-weight: 600;">Growth Nation Team</span>
                            </p>
                            
                            <!-- Social Links (Optional) -->
                            <div style="margin-top: 20px;">
                                <p style="margin: 0; font-size: 12px; color: #9ca3af; line-height: 1.5;">
                                    Growth Nation | Online Learning Platform<br>
                                    Follow us for more learning tips and updates
                                </p>
                            </div>
                        </td>
                    </tr>
                    
                </table>
                
            </td>
        </tr>
    </table>
    
</body>
</html>`,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error sending offer email:", error);
    return NextResponse.json(
      { error: "Failed to send  offer email" },
      { status: 500 }
    );
  }
}
