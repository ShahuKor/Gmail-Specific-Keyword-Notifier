
# Gmail Specific Keyword Notifier

Many of us dont usually check mails all the time, even if the notifications are on, we dont care to check it since not every mail is important.

Recently I had applied for visa and I wanted to get notification for any mail that has some particular keywords in it. I cannot check the email notifications everytime so wanted a custom notification.

So, I created a Google Apps Script that helps me with this problem. I have used Gmail's in built functionality to do so and for the custom notifications on my phone I have used Pushover's API.


## Steps to run this script

- Go to "Google Apps Script"
- Sign in with your desired Gmail Account
- Create a new project and give it a title as desired
- Paste the code as it is in the Editor
- Type in the keywords that you want to get notified about in the Keywords Array
-  Now as we want the notifications on our mobile, so for that we are using Pushover App.
-  Go to "Pushover" website and create a account.
- You will get your "userkey" on the dashboard.
- We will also need "apiToken" as we are using Pushover's Functionality.
- For APItoken, create a new application in Pushover, give it a custom name and you will get your "apiToken" key.
- Copy both "userkey" and "apiToken" and paste it in the code.
- Save and Run your code.
- After this we need to create a Trigger that will check mails time to time.
- For creating a trigger, go to Triggers section in the left side of the page.
- Click on Add trigger.
- Choose "checkEmails" function to run.
- Select event source as "Time-driven" , Select type of time based trigger as "Minutes-Timer" and Select minute interval as "every 5 Minutes".
- Click on Save and our script is ready!
- Install Pushover app on your mobile device and sign in with the exact same user ID credentials that you used to create the account.

You can Test this code and see if it running by sending a test mail to your gmail. If you followed all these steps correctly then you will surely receive a notification from "Pushover" app when specific keywords appear in the mail. 




