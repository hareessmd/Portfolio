import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {/* <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Tech Creator
            </h3> */}

            <p className="text-muted-foreground">
              Technical Consultant with 4+ years of experience in Supply Chain, CRM, and Customer Services consulting. I blend analytics, automation, and 
              storytelling to help organizations make faster, smarter decisions. 
              Skilled in application development, and advanced analytics with deep expertise in OMP, Salesforce, SQL, and CRM tools. 
              Proven record of leading cross-functional innovation projects, turning complex Demand Forecasting challenges into streamlined, 
              integrating cross-platform functionalities (e.g., SAP interfaces, Salesforce automation),
              data-driven processes that deliver measurable improvements in forecasting, troubleshooting, and customer experience. 
              Adept at training teams, streamlining processes, and creating scalable, tailored solutions for global enterprises.
            </p>

            <p className="text-muted-foreground">
              I'm passionate about creating elegant solutions to complex
              problems, and I'm constantly learning new technologies and
              techniques to stay at the forefront of the ever-evolving web
              landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="https://docs.google.com/document/d/1-qOBZK4fB85rf4BKZTUwVSfezeTtG9yx/edit?usp=sharing&ouid=112746308383797240093&rtpof=true&sd=true"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Application Development</h4>
                  <p className="text-muted-foreground">
                    Specialized in designing and implementing scalable forecasting solutions within the OMP application. 
                    By leveraging OPAL scripting, SQL, and automation frameworks, I modernize legacy systems, enhance statistical forecast engines.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    I ensure on-time delivery, efficient sprint execution, and transparent stakeholder communication. My proactive risk assessment 
                    and data visualization expertise drive measurable improvements in SLA accuracy, workload efficiency, and client satisfaction.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Work Experience</h4>
                  <p className="text-muted-foreground">
                    As a Supply Chain Consultant at OMP, I’ve led initiatives to optimize forecasting performance, automate critical workflows, 
                    and reduce operational downtime. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};