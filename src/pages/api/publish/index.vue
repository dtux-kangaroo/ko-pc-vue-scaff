<template>
<div>
     <PieChart
       :option="pieOption"
       :config="{}"
       height="300px"
       ></PieChart>
       服务发布
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
      pieOption
    };
  },
  methods: {
    clickTab(e){
     console.log(e,'e');
        this.$router.push('/api/index/slist');
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
