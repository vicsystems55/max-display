import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

// Demo
import Demo from "./views/Demo";

// Auth
import Signin from "./views/auth/Signin"
import EmailVerification from "./views/auth/EmailVerification"
import Reset from "./views/auth/Reset"
import Signup from "./views/auth/Signup"
import Step1 from "./views/auth/Step-1"
import Step2 from "./views/auth/Step-2"
import UploadID from "./views/verify/UploadID"
import MerchantKYC from "./views/verify/MerchantKYC"
import AddPayout from "./views/verify/AddPayout"
// Dashboard
import Index from "./views/dashboard/Index"
import CreateInvoice from "./views/dashboard/CreateInvoice"
import Invoice from "./views/dashboard/Invoice"
import Notification from "./views/dashboard/Notification"
import Payment from "./views/dashboard/Payment"
import Wallet from "./views/dashboard/Wallet"
import Profile1 from "./views/dashboard/Profile"
// Settings
import Profile from "./views/dashboard/settings/Profile"
import API from "./views/dashboard/settings/API"
import Activity from "./views/dashboard/settings/Activity"
import Application from "./views/dashboard/settings/Application"
import PaymentMethod from "./views/dashboard/settings/PaymentMethod"
import Security from "./views/dashboard/settings/Security"

const routes = [
  // Settings
  {
    path: "/settings-payment-method",
    name: "PaymentMethod",
    component: PaymentMethod,
  },
  {
    path: "/settings-api",
    name: "API",
    component: API,
  },
  {
    path: "/settings-activity",
    name: "Activity",
    component: Activity,
  },
  {
    path: "/settings-security",
    name: "Security",
    component: Security,
  },
  {
    path: "/settings-application",
    name: "Application",
    component: Application,
  },
  {
    path: "/settings-profile",
    name: "Profile",
    component: Profile,
  },
  // Dashboard
  {
    path: "/profile",
    name: "Profile1",
    component: Profile1,
  },
  {
    path: "/balance",
    name: "Wallet",
    component: Wallet,
  },
  {
    path: "/bill",
    name: "Payment",
    component: Payment,
  },
  {
    path: "/notification",
    name: "Notification",
    component: Notification,
  },
  {
    path: "/invoice",
    name: "Invoice",
    component: Invoice,
  },
  {
    path: "/create-invoice",
    name: "CreateInvoice",
    component: CreateInvoice,
  },
  {
    path: "/",
    name: "Index",
    component: Index,
  },

  // Demo
  {
    path: "/demo",
    name: "Demo",
    component: Demo,
  },
  // auth
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/reset",
    name: "reset",
    component: Reset,
  },
  {
    path: "/otp-1",
    name: "Step1",
    component: Step1,
  },

  {
    path: "/uploadid",
    name: "UploadID",
    component: UploadID,
  },
  {

    path: "/merchantkyc",
    name: "MerchantKYC",
    component: MerchantKYC,
  },
  {

    path: "/addpayout",
    name: "AddPayout",
    component: AddPayout,
  },
  {
    path: "/otp-2",
    name: "Step2",
    component: Step2,
  },
  {
    path: "/verify-email",
    name: "EmailVerification",
    component: EmailVerification,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
