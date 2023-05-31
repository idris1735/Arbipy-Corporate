<template>
  <div class="dashboard p-4">
    <!-- end nav -->
    <div class="mt-2 w-full">
      <div class="lg:flex grid-cols-1 lg:space-y-0 space-y-3 gap-5 justify-between">
        <div>
          <p class="uppercase text-xs text-gray-700 font-semibold">overview</p>
          <h1 class="text-2xl text-gray-900 dark:text-gray-200 font-medium">Dashboard</h1>
        </div>
        <div class="flex gap-2">
          <button
            class="bg-white dark:bg-gray-800 hover:border-gray-200 dark:hover:bg-gray-700 dark:text-white dark:border-gray-700 border rounded py-2 px-5"
          >
            New view
          </button>
          <button
            class="bg-primary border flex gap-2 text-white hover:bg-primary/80 dark:border-gray-700 rounded py-3 px-5"
          >
            <span class="icon text-2xl"><Icon icon="ic:twotone-plus" /></span>
            <span class="text"> Create New Report</span>
          </button>
        </div>
      </div>
    </div>

    <div
      class="mt-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border border dark:border-gray-700"
    >
      <h2 class="font-bold text-lg text-gray-800 dark:text-gray-200">
        Latest Transactions
      </h2>
      <p class="text-gray-400 font-lexend font-normal">
        This is a list of latest transactions
      </p>
      <div class="wrapping-table mt-10">
        <table
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400 lg:overflow-auto overflow-x-scroll"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="uppercase px-6 py-3">Transaction</th>
              <th scope="col" class="uppercase px-6 py-3">Date & Time</th>
              <th scope="col" class="uppercase px-6 py-3">Amount</th>
              <th scope="col" class="uppercase px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50"
              v-for="items in tableTransaction"
              :key="items.transaction"
            >
              <td class="px-6 py-4">
                {{ items.transaction }}
              </td>
              <td class="px-6 py-4">
                {{ items.datetime }}
              </td>
              <td class="px-6 py-4">
                {{ items.amount }}
              </td>
              <td class="px-6 py-4">
                <span
                  class="text-green-800 bg-green-300 px-3 py-1 rounded-md"
                  v-if="items.statusTransaction == 'completed'"
                >
                  {{ items.statusTransaction }}
                </span>
                <span
                  class="text-purple-800 bg-purple-300 px-3 py-1 rounded-md"
                  v-else-if="items.statusTransaction == 'progress'"
                >
                  {{ items.statusTransaction }}
                </span>
                <span class="text-red-800 bg-red-300 px-3 py-1 rounded-md" v-else>
                  {{ items.statusTransaction }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="wrapper-button flex justify-between mt-3">
        <select
          name=""
          id=""
          class="dark:bg-gray-800 dark:hover:bg-gray-700 border dark:border-gray-700 max-w-lg px-4 py-3 block rounded-md text-gray-500 dark:text-gray-400"
        >
          <option value="">Last Month</option>
        </select>
        <button class="uppercase border-b border-red-600 text-red-600">
          Transaction Report
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { Icon } from "@iconify/vue";

export default {
  name: "Dashboard",
  data() {
    return {
      seriesDonut: [20, 15, 63, 83],
      tableTransaction: [
        {
          transaction: "Payment from Mr Bolaji",
          datetime: "Apr 22, 2023",
          amount: "#450.000",
          statusTransaction: "completed",
        },
        {
          transaction: "Payment from Mr Tobi",
          datetime: "May 9, 2023",
          amount: "#250.000",
          statusTransaction: "completed",
        },
        {
          transaction: "Payment from Mr Stephen",
          datetime: "May 26, 2023",
          amount: "#150.000",
          statusTransaction: "progress",
        },
        {
          transaction: "Payment failed from #046577",
          datetime: "May 29, 2023",
          amount: "#180.000",
          statusTransaction: "cancelled",
        },
      ],
    };
    // end chart data line
  },
  components: {
    Icon,
  },
  mounted() {},
};
</script>
