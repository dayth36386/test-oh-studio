import { useEffect } from "react";
import AOS from "aos";

import useContact from "./hook/useContact";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
import { useHomeStore } from "~/store/homeStore";

export function ContactPageRender() {
  const { data, getHomeAll } = useHomeStore();
  useEffect(() => {
    getHomeAll();
    AOS.init({
      once: true
    });
  }, []);
  const {
    handleSubmit,
    handleInputChange,
    handleTextareaChange,
    getError,
    dataForm
  } = useContact();

  return (
    <div className="w-full sm:h-screen sm:pt-50 pt-20">
      <div className="grid sm:grid-cols-2 h-full">
        <div
          className="p-2 bg-[#e8e5e480] hidden sm:block"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <iframe
            className="w-full sm:h-full h-96"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d73474.49081868667!2d100.54905643074221!3d13.78287839057461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29fdaff1cfd7f%3A0xac564e2869f44d74!2sYellow%20Line!5e0!3m2!1sen!2sth!4v1744368611401!5m2!1sen!2sth"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div
          className="flex flex-col gap-5 p-10 justify-center"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <p className="text-5xl font-medium">Contact Us</p>
          <p className="text-[#7f7f7f]">
            Please leave your email and we’ll get back to you as soon as
            possible.
          </p>
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5">
            {dataForm.map((item, index) => (
              <div key={index} className="flex flex-col gap-2">
                <Label htmlFor={item.label}>{item.label}</Label>
                {item.typeInput === "textarea" ? (
                  <>
                    <Textarea
                      id={item.label}
                      placeholder={item.placeholder}
                      name={item.label}
                      onChange={(e) => handleTextareaChange(e, item.filledName)}
                      className={`${
                        getError(item.filledName)
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                    {getError(item.filledName) && (
                      <div className="flex gap-2 items-center">
                        <p className="text-red-500 text-sm">
                          {getError(item.filledName)}
                        </p>
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <Input
                      id={item.label}
                      type={item.type}
                      placeholder={item.placeholder}
                      name={item.label}
                      onChange={(e) => handleInputChange(e, item.filledName)}
                      className={`${
                        getError(item.filledName)
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                    {getError(item.filledName) && (
                      <div className="flex gap-2 items-center">
                        <p className="text-red-500 text-sm">
                          {getError(item.filledName)}
                        </p>
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
            <Button type="submit">Send</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
