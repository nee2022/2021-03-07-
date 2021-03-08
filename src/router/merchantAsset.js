import Vue from "vue";
import Router from "vue-router";

import refresh from "../pages/refresh";

import dataBoard from "../pages/merchantAsset/dataViewComponent/dataBoard.vue";
import merchantAccountAll from "../pages/merchantAsset/merchantAccountComponent/merchantAccountAll.vue";
import merchantAccountType1 from "../pages/merchantAsset/merchantAccountComponent/merchantAccountType1.vue";
import merchantAccountType2 from "../pages/merchantAsset/merchantAccountComponent/merchantAccountType2.vue";
import merchantAccountType3 from "../pages/merchantAsset/merchantAccountComponent/merchantAccountType3.vue";
import orderRecord from "../pages/merchantAsset/financialManagementComponent/orderRecord.vue";
import shareRecord from "../pages/merchantAsset/financialManagementComponent/shareRecord.vue";
import withdrawalRecord from "../pages/merchantAsset/financialManagementComponent/withdrawalRecord.vue";

import paymentGateway from "../pages/merchantAsset/selfOperatedGatewayComponent/paymentGateway.vue";
import invoiceGateway from "../pages/merchantAsset/selfOperatedGatewayComponent/invoiceGateway.vue";
import smsGateway from "../pages/merchantAsset/selfOperatedGatewayComponent/smsGateway.vue";

import openPlatform from "../pages/merchantAsset/openPlatformComponent/openPlatform.vue";

import companyInformation from "../pages/merchantAsset/companyInformationComponent/companyInformation.vue";

Vue.use(Router);

const routes = [
  { path: "/refresh", component: refresh },

  { path: "/merchantAsset/dataBoard", component: dataBoard },

  { path: "/merchantAsset/agent", component: merchantAccountAll },
  { path: "/merchantAsset/agent/type/1", component: merchantAccountType1 },
  { path: "/merchantAsset/agent/type/2", component: merchantAccountType2 },
  { path: "/merchantAsset/agent/type/3", component: merchantAccountType3 },

  { path: "/merchantAsset/orderRecord", component: orderRecord },
  { path: "/merchantAsset/shareRecord", component: shareRecord },
  { path: "/merchantAsset/withdrawalRecord", component: withdrawalRecord },

  { path: "/merchantAsset/paymentGateway", component: paymentGateway },
  { path: "/merchantAsset/invoiceGateway", component: invoiceGateway },
  { path: "/merchantAsset/smsGateway", component: smsGateway },

  { path: "/merchantAsset/openPlatform", component: openPlatform },

  { path: "/merchantAsset/companyInformation", component: companyInformation },

  { path: "*", component: dataBoard }
];
const router = new Router({
  routes
});
export default router;
