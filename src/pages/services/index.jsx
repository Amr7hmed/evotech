import React from "react";
import { Helmet } from "react-helmet-async";
import HeaderPage from "../../components/public/header_page";
import ServicesComponent from "../../components/services/services_component";
import ServesHeaderImage from "../../images/bg/serves_header.jpg";

// Images Services Component
import webdesign from "../../images/services/webdesign.jpg";
import webdevelopment from "../../images/services/web-development.jpg";
import webmanagement from "../../images/services/website-management.jpg";
import domainhosting from "../../images/services/domainhosting.jpg";
import mobileapplication from "../../images/services/mobileapplication.jpg";
import ecommerce from "../../images/services/e-commerce.jpg";
import consulting from "../../images/services/softwareconsulting.jpg";

// ./assets/images/bg/serves_header.jpg
function Services() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title> EvoTech || Services </title>
        <meta name="description" content="EvoTech application" />
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="/about" />
      </Helmet>
      <div>
        <HeaderPage Image={ServesHeaderImage} Title="Services" />
        <ServicesComponent
          Image={webdevelopment}
          styleclass={"left"}
          Title="Web Development"
          description={`Programming and website development is one of the most productive 
            methods that make your website an honorable interface for your company's 
            business and services It's also constantly looking for all the new things 
            in the world of websites to offer you.It also allows the site to work in a professional 
            frame commensurate with the mental image created for customers. it helps the company 
            achieve the goal of creating the website so it is necessary to cooperate with experienced`}
        />

        <ServicesComponent
          Image={webdesign}
          styleclass={"right"}
          Title="Web design (UI / UX)"
          description={`Website design has many advantages and points of importance. 
          As it creates the first impression of the site 
          And there are a few points that explain the process of achieving your site's goals, 
          which  are to increase engagement and sales: First, it helps customers reach for 
          the information they want to know it. Second, it saves the company time and money. 
          Third, it allows the company flexibility to communicate with the customer, 
          identify his needs, and divide customers into categories based on their goals.`}
        />
        

        <ServicesComponent
          Image={webmanagement}
          styleclass={"left"}
          Title="Web management & maintenance"
          description={`This service periodically updates the customer's website, 
          which includes the following: It Makes necessary updates to content, images, and information about products or services. 
          It also creates or deletes email or address data.In addition to the work of 
          website management and maintenance, it is concerned with the use of colors that comfort 
          the public's eye. And also to constantly be aware of everything new in the site's maintenance field.In the end, 
          this helps the company maintain its standing and the confidence of its customers.
          `}
        />

        <ServicesComponent
          Image={domainhosting}
          styleclass={"right"}
          Title="Domain & Hosting"
          description={`
          Domain services and managed web hosting services help websites attract 
          several customers in a short period. In addition, the service enables 
          many visitors to browse the site.It can also help startups reach 
          large numbers of people with minimal cost and time, thereby increasing 
          profits.So, the hosting service is one of the factors in increasing 
          the quality of your site in content and speed of service delivery. 
          `}
        />

        <ServicesComponent
          Image={mobileapplication}
          styleclass={"left"}
          Title="Mobile Application Developer"
          description={`Mobile applications are the means to ensure that you can reach any customer anywhere. 
          It also helps you update and add the products and services you want. In addition, 
          it limits the distance between you and customers and makes your company an open book to any clients. 
          As it allows you to add all the details that the customer is looking for and work on reviewing 
          them constantly To ensure the effectiveness of your mobile application and how successful it is 
          in achieving the goals. Accordingly, it provides one of the most productive success factors (flexibility and credibility).`}
        />

        <ServicesComponent
          Image={ecommerce}
          styleclass={"right"}
          Title="e-commerce website design"
          description={`Online stores have become the most efficient electronic means of promoting 
            any service or product. Focus more on it because it's flexible in terms 
            of interacting with customers And easy to identify their goals and what they're 
            looking for It It also costs little compared to the profits made in record time. 
            In addition to the ability to display a large number of images, numbers work on 
            organizing and accessing them easily. Which puts it at the forefront of the goals 
            of any beginner or professional company`}
        />

        <ServicesComponent
          Image={consulting}
          styleclass={"left"}
          Title="Software Consulting"
          description={`Determining the starting point is a measure of success for any company.
             Accordingly, the software operations of the company’s website need 
             the advice of programming specialists to determine the general idea. 
             And the plans the company is going to make let us start now As we provide 
             integrated consultations about your website and the public form in which 
             it will appear based on its policy and objectives`}
        />
      </div>
    </>
  );
}

export default Services;
