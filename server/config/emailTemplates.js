export const EMAIL_VERIFY_TEMPLATE = `
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <title>Email Verification</title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" type="text/css">
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: 'Open Sans', sans-serif;
      background: radial-gradient(circle at 20% 30%, rgba(158,92,243,0.25), transparent 70%),
                  radial-gradient(circle at 80% 70%, rgba(2,240,255,0.25), transparent 70%),
                  #0A0A0A;
      color: #fff;
    }

    .container {
      max-width: 500px;
      margin: 60px auto;
      background: rgba(20, 20, 20, 0.85);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 14px;
      box-shadow: 0 0 40px rgba(158,92,243,0.25);
      backdrop-filter: blur(10px);
    }

    .header {
      text-align: center;
      padding: 35px 25px 20px;
      border-bottom: 1px solid rgba(255,255,255,0.1);
    }

    .header h1 {
      font-size: 24px;
      margin: 0;
      background: linear-gradient(90deg, #9E5CF3, #02F0FF, #FF914D);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: 700;
    }

    .content {
      padding: 25px 30px 40px;
      font-size: 15px;
      line-height: 1.7;
      color: #e3e3e3;
    }

    .highlight {
      color: #02F0FF;
      font-weight: 600;
    }

    .button {
      display: inline-block;
      width: 100%;
      text-align: center;
      margin-top: 25px;
      padding: 12px 0;
      font-size: 18px;
      font-weight: 700;
      background: linear-gradient(90deg, #9E5CF3, #02F0FF, #FF914D);
      color: #000;
      border-radius: 6px;
      box-shadow: 0 0 20px rgba(158,92,243,0.3);
      letter-spacing: 1px;
    }

    .footer {
      text-align: center;
      font-size: 13px;
      color: #888;
      padding-bottom: 30px;
    }

    @media only screen and (max-width: 480px) {
      .container {
        width: 85%;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Verify Your Email</h1>
    </div>
    <div class="content">
      <p>You’re just one step away from verifying your account linked with: <span class="highlight">{{email}}</span></p>
      <p>Use the following OTP to complete your verification process:</p>
      <p class="button">{{otp}}</p>
      <p>This OTP will remain valid for 24 hours. Please do not share it with anyone.</p>
    </div>
    <div class="footer">
      <p>© 2025 EStreet | All Rights Reserved</p>
    </div>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_TEMPLATE = `
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <title>Password Reset</title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" type="text/css">
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: 'Open Sans', sans-serif;
      background: radial-gradient(circle at 20% 30%, rgba(255,145,77,0.25), transparent 70%),
                  radial-gradient(circle at 80% 70%, rgba(2,240,255,0.25), transparent 70%),
                  #0A0A0A;
      color: #fff;
    }

    .container {
      max-width: 500px;
      margin: 60px auto;
      background: rgba(20, 20, 20, 0.85);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 14px;
      box-shadow: 0 0 40px rgba(255,145,77,0.2);
      backdrop-filter: blur(10px);
    }

    .header {
      text-align: center;
      padding: 35px 25px 20px;
      border-bottom: 1px solid rgba(255,255,255,0.1);
    }

    .header h1 {
      font-size: 24px;
      margin: 0;
      background: linear-gradient(90deg, #FF914D, #02F0FF, #9E5CF3);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: 700;
    }

    .content {
      padding: 25px 30px 40px;
      font-size: 15px;
      line-height: 1.7;
      color: #e3e3e3;
    }

    .highlight {
      color: #FF914D;
      font-weight: 600;
    }

    .button {
      display: inline-block;
      width: 100%;
      text-align: center;
      margin-top: 25px;
      padding: 12px 0;
      font-size: 18px;
      font-weight: 700;
      background: linear-gradient(90deg, #FF914D, #02F0FF, #9E5CF3);
      color: #000;
      border-radius: 6px;
      box-shadow: 0 0 20px rgba(255,145,77,0.3);
      letter-spacing: 1px;
    }

    .footer {
      text-align: center;
      font-size: 13px;
      color: #888;
      padding-bottom: 30px;
    }

    @media only screen and (max-width: 480px) {
      .container {
        width: 85%;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Reset Your Password</h1>
    </div>
    <div class="content">
      <p>We’ve received a password reset request for your account associated with: <span class="highlight">{{email}}</span></p>
      <p>Use the following OTP to reset your password securely:</p>
      <p class="button">{{otp}}</p>
      <p>This OTP is valid for the next 15 minutes. Please do not share it with anyone.</p>
    </div>
    <div class="footer">
      <p>© 2025 EStreet | All Rights Reserved</p>
    </div>
  </div>
</body>
</html>
`;

export const WELCOME_TEMPLATE = `
<!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Welcome Email</title>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">
    <style>
      body {
        margin: 0;
        padding: 0;
        font-family: 'Open Sans', sans-serif;
        background: radial-gradient(circle at 20% 30%, rgba(158,92,243,0.25), transparent 70%),
                    radial-gradient(circle at 80% 70%, rgba(2,240,255,0.25), transparent 70%),
                    #0A0A0A;
        color: #ffffff;
      }

      .container {
        max-width: 520px;
        margin: 60px auto;
        background: rgba(20,20,20,0.9);
        border: 1px solid rgba(255,255,255,0.08);
        border-radius: 14px;
        box-shadow: 0 0 40px rgba(158,92,243,0.25);
        backdrop-filter: blur(10px);
        overflow: hidden;
      }

      .header {
        text-align: center;
        padding: 35px 25px 15px;
        border-bottom: 1px solid rgba(255,255,255,0.1);
      }

      .header h1 {
        font-size: 26px;
        margin: 0;
        background: linear-gradient(90deg, #9E5CF3, #02F0FF, #FF914D);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 700;
      }

      .content {
        padding: 30px 35px 45px;
        font-size: 15px;
        line-height: 1.7;
        color: #e3e3e3;
        text-align: center;
      }

      .highlight {
        color: #02F0FF;
        font-weight: 600;
      }

      .button {
        display: inline-block;
        margin-top: 25px;
        background: linear-gradient(90deg, #9E5CF3, #02F0FF, #FF914D);
        color: #000;
        padding: 12px 30px;
        border-radius: 6px;
        text-decoration: none;
        font-weight: 700;
        box-shadow: 0 0 20px rgba(158,92,243,0.3);
      }

      .footer {
        text-align: center;
        padding: 15px 0 25px;
        font-size: 13px;
        color: #888;
      }

      @media only screen and (max-width: 480px) {
        .container { width: 85%; }
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>Welcome to ARC Studio 🚀</h1>
      </div>
      <div class="content">
        <p>Hello,</p>
        <p>We’re thrilled to have you onboard!</p>
        <p>Your account has been successfully created with the email ID: <span class="highlight">{{email}}</span>.</p>
        <a href="https://mern-auth-frontend-qtwh.onrender.com" class="button">Explore Dashboard</a>
      </div>
      <div class="footer">
        <p>© 2025 ARC Studio | All Rights Reserved</p>
      </div>
    </div>
  </body>
  </html>`;

export const ACCOUNT_VERIFIED_TEMPLATE = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Account Verified</title>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">
    <style>
      body {
        margin: 0;
        padding: 0;
        font-family: 'Open Sans', sans-serif;
        background: radial-gradient(circle at 20% 30%, rgba(2,240,255,0.25), transparent 70%),
                    radial-gradient(circle at 80% 70%, rgba(158,92,243,0.25), transparent 70%),
                    #0A0A0A;
        color: #ffffff;
      }

      .container {
        max-width: 520px;
        margin: 60px auto;
        background: rgba(20,20,20,0.9);
        border: 1px solid rgba(255,255,255,0.08);
        border-radius: 14px;
        box-shadow: 0 0 40px rgba(2,240,255,0.25);
        backdrop-filter: blur(10px);
        overflow: hidden;
      }

      .header {
        text-align: center;
        padding: 35px 25px 15px;
        border-bottom: 1px solid rgba(255,255,255,0.1);
      }

      .header h1 {
        font-size: 26px;
        margin: 0;
        background: linear-gradient(90deg, #02F0FF, #9E5CF3, #FF914D);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 700;
      }

      .content {
        padding: 30px 35px 45px;
        font-size: 15px;
        line-height: 1.7;
        color: #e3e3e3;
        text-align: center;
      }

      .highlight {
        color: #02F0FF;
        font-weight: 600;
      }

      .button {
        display: inline-block;
        margin-top: 25px;
        background: linear-gradient(90deg, #02F0FF, #9E5CF3, #FF914D);
        color: #000;
        padding: 12px 30px;
        border-radius: 6px;
        text-decoration: none;
        font-weight: 700;
        box-shadow: 0 0 20px rgba(2,240,255,0.3);
      }

      .footer {
        text-align: center;
        padding: 15px 0 25px;
        font-size: 13px;
        color: #888;
      }

      @media only screen and (max-width: 480px) {
        .container { width: 85%; }
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>🎉 Congratulations!</h1>
      </div>
      <div class="content">
        <p>Hello,</p>
        <p>Your ARC Studio account has been successfully <span class="highlight">verified</span>.</p>
        <p>Welcome to the creative space — you can now access all premium features and tools.</p>
        <a href="https://mern-auth-frontend-qtwh.onrender.com" class="button">Go to Dashboard</a>
      </div>
      <div class="footer">
        <p>© 2025 ARC Studio | All Rights Reserved</p>
      </div>
    </div>
  </body>
</html>
`;
