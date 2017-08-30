# Full Stack Application Project

## Sweet Pea Farm Business Webpage

The Sweet Pea app functions as a single page application using HTML and CSS with [Bulma](http://bulma.io/), a CSS framework. The client side is written in Javascript with the jQuery library and Handlebars templating. The [back end](https://github.com/itbeauregard/sweet-pea-back-end) is written in Ruby and I used Rails Migrations to manage SQL tables.

## Check out the page

The page was deployed on gitHub pages [at this address](https://itbeauregard.github.io/sweet-pea-front-end/).

The back end repository is located [here](https://github.com/itbeauregard/sweet-pea-back-end).

## Development Process

I had an idea early on that I wanted to make a website for a business that my friend and I had started but hadn't totally gotten off the ground--Sweet Pea Farm. After consulting with my friend, I decided I would make a project out of creating data tables for recording customer quote requests for Floral Design and customer registrations for the Community Supported Agriculture (CSA) Shares. The website would ideally allow the customer to submit these requests and inquiries, while the business owner could look at the full tables and update information or delete processed requests.

Some user stories I developed were:
* As a customer, I want to be able to access a CSA Registration Form so that I can express interest in a CSA Share.
* As a customer, I want to read details about a CSA Share and about the farm.
* As a customer, I'd like to be able to access a quote request form for Floral Design so that I can get an estimate for my event.
* As a business owner, I'd like to able to manage quote requests and have a way to contact customers to follow up.
* As a business owner, I'd like to be able to see all CSA registrations so that I can gauge interest in my product and adjust my marketing according.
* As a business owner, I'd like to have special administrative permissions to the website so that customers have less access than me.

The process started with [some](http://imgur.com/bzJJ41v) [very](http://imgur.com/9WHSpJV) [rough](http://imgur.com/i6CpDsH) [wireframes](http://imgur.com/2bTdEHE). I'd like to work on my wireframing skills.

This project required much more design than the last game project. Most of my coding was a matter of managing what the user could do through jQuery. The data tables were pretty straightforward. I used Handlebars to render them with templates. Using the Bulma framework really helped with formatting the forms and tables. It's hard to say whether the time it took me to learn Bulma was worth the convenience. I had a wee meltdown when I realized that commenting out the Bootstrap import statements meant I couldn't deploy my page. I ran into trouble because Bootstrap was taking precedence over Bulma somehow. But ironed out the issues.

I referred to my tic-tac-toe application a lot through this project when I needed to understand things like how the events.js, api.js, and ui.js all fit together. It was much easier this time around because I knew what worked.


## Unsolved Problems

1. Authentication & Authorization: I do not have any feature that distinguishes between a customer and a business owner. I was intending to make some hacky move like having an unsecure string password, but instead opted to focus on making the page more navigable.

2. Design & Content: I'd like to add more of the content I have lying around in a Wix page that we were going to launch last year. I'd like to make it more of a useful customer experience with pictures and a FAQs view.

3. Smartphone compatibility: I didn't test for smartphones as much, though I think using Bulma helped to make my app more flexible. I'd like to test those views because I know potential employers do a lot of scoping from their phones now. 
