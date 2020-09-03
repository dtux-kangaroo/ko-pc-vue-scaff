<template>
<div>
  <!-- <el-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit"> -->
  <!-- <el-tab-pane
    :key="item.name"
    v-for="(item, index) in editableTabs"
    :label="item.title"
    :name="item.name"
  >{{item.content}}
  </el-tab-pane>
</el-tabs> -->
  <div>
    <router-view></router-view>
  </div>
</div>

</template>
<script>
import { PieChart, BarChart, LineChart } from "@/components/chart/index";
import { barOption, pieOption, lineOption } from "@/constants/options";
export default {
  components: {
    PieChart,
    BarChart,
    LineChart
  },
  data() {
    return {
      barOption,
      lineOption,
      pieOption,
      editableTabsValue: "2",
      editableTabs: [
        {
          title: "Tab 1",
          path: "/api/all/outer",
          name: "1",
          content: "123"
        },
        {
          title: "Tab 2",
          path: "/api/all/outer",
          name: "2",
          content: "456"
        }
      ],
      tabIndex: 2
    };
  },
  methods: {
    clickTab(e){
        this.$router.push('/api/all/innerOrOuter');
    },
    handleTabsEdit(targetName, action) {
      if (action === "add") {
        let newTabName = ++this.tabIndex + "";
        this.editableTabs.push({
          title: "New Tab",
          name: newTabName,
          content: "New Tab content"
        });
        this.editableTabsValue = newTabName;
      }

      if (action === "remove") {
        let tabs = this.editableTabs;
        let activeName = this.editableTabsValue;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }

        this.editableTabsValue = activeName;
        this.editableTabs = tabs.filter(tab => tab.name !== targetName);
      }
    }
  }
};
</script>
