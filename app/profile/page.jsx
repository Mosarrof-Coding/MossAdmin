import React from "react";
import {
  Pencil,
  MapPin,
  Mail,
  Phone,
  Info,
  Home,
  Landmark,
  Facebook,
  Linkedin,
  Instagram,
  Twitter,
} from "lucide-react";

const ProfilePage = () => {
  return (
    <div className="space-y-10 mx-auto p-3 md:p-5 w-full">
      {/* Header */}
      <div className="flex items-center gap-4">
        <img
          src="https://i.pravatar.cc/100?u=user"
          alt="User"
          className="ring-border rounded-full ring-2 w-20 h-20"
        />
        <div>
          <h1 className="font-bold text-2xl">Musharof Chowdhury</h1>
          <p className="text-muted-foreground">Team Manager</p>
          <p className="flex items-center gap-1 mt-1 text-muted-foreground text-sm">
            <MapPin className="w-4 h-4" />
            Arizona, United States
          </p>
        </div>

        <div className="flex items-center gap-3 ml-auto">
          <span className="inline-block p-1.5 border text-border hover:border-foreground rounded-full hover:text-foreground transition-all duration-300 cursor-pointer">
            <Facebook />
          </span>
          <span className="inline-block p-1.5 border text-border hover:border-foreground rounded-full hover:text-foreground transition-all duration-300 cursor-pointer">
            <Linkedin />
          </span>
          <span className="inline-block p-1.5 border text-border hover:border-foreground rounded-full hover:text-foreground transition-all duration-300 cursor-pointer">
            <Instagram />
          </span>
          <span className="inline-block p-1.5 border text-border hover:border-foreground rounded-full hover:text-foreground transition-all duration-300 cursor-pointer">
            <Twitter />
          </span>
          <button className="flex items-center gap-1 bg-primary hover:bg-primary/90 ml-6 px-4 py-2 rounded-lg text-white transition">
            <Pencil className="w-4 h-4" />
            Edit
          </button>
        </div>
      </div>

      {/* Personal Info */}
      <div className="space-y-4 bg-card shadow p-6 rounded-xl">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-lg">Personal Information</h2>
          <button className="flex items-center gap-1 text-primary text-sm">
            <Pencil className="w-4 h-4" />
            Edit
          </button>
        </div>
        <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
          <InfoBlock label="First Name" value="Musharof" />
          <InfoBlock label="Last Name" value="Chowdhury" />
          <InfoBlock
            label="Email address"
            value="randomuser@pimjo.com"
            icon={<Mail className="w-4 h-4 text-muted-foreground" />}
          />
          <InfoBlock
            label="Phone"
            value="+09 363 398 46"
            icon={<Phone className="w-4 h-4 text-muted-foreground" />}
          />
          <InfoBlock label="Bio" value="Team Manager" />
        </div>
      </div>

      {/* Address */}
      <div className="space-y-4 bg-card shadow p-6 rounded-xl">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-lg">Address</h2>
          <button className="flex items-center gap-1 text-primary text-sm">
            <Pencil className="w-4 h-4" />
            Edit
          </button>
        </div>
        <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
          <InfoBlock
            label="Country"
            value="United States"
            icon={<Home className="w-4 h-4 text-muted-foreground" />}
          />
          <InfoBlock
            label="City/State"
            value="Phoenix, Arizona, United States."
            icon={<MapPin className="w-4 h-4 text-muted-foreground" />}
          />
          <InfoBlock
            label="Postal Code"
            value="ERT 2489"
            icon={<Landmark className="w-4 h-4 text-muted-foreground" />}
          />
          <InfoBlock label="TAX ID" value="AS4568384" />
        </div>
      </div>
    </div>
  );
};
export default ProfilePage;

const InfoBlock = ({ label, value, icon }) => (
  <div>
    <p className="flex items-center gap-1 text-muted-foreground text-sm">
      {icon}
      {label}
    </p>
    <p className="font-medium text-base">{value}</p>
  </div>
);
