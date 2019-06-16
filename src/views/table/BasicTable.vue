<template>
  <div class="baisc_table">
    <div class="basic_table_header">
      <Input search enter-button="搜索" placeholder="Enter something..."/>
      <div class="btns">
        <Button type="success">添加</Button>
        <Button type="info" @click = 'exportTable'>导出excel</Button>
      </div>
    </div>
    <Table :columns="columns1" :data="data1"></Table>
    <div class="page">
      <Page :total="100"/>
    </div>
  </div>
</template>
<script>
import  DeleteBtn from "../../components/DeteleBtn.vue";
import XLSX from 'xlsx';
import {openDownloadDialog, sheet2blob} from '../../tools/tool'
export default {
  data() {
    return {
      columns1: [
        {
          title: "Name",
          key: "name",
          render: (h, params) => {
            return h("div", [
              h("Icon", {
                props: {
                  type: "person"
                }
              }),
              h("strong", params.row.name)
            ]);
          }
        },
        {
          title: "Age",
          key: "age"
        },
        {
          title: "Address",
          key: "address"
        },
        {
          title: "Action",
          key: "action",
          width: 150,
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      this.show(params.index);
                    }
                  }
                },
                "View"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "error",
                    size: "small"
                  },
                  on: {
                    click: () => {
                      this.remove(params.index);
                    }
                  }
                },
                "Delete"
              )
            ]);
          }
        }
      ],
      data1: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park"
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park"
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park"
        }
      ]
    };
  },
  components: {
      DeleteBtn,
  },
  methods: {
    show(index) {
      this.$Modal.info({
        title: "User Info",
        content: `Name：${this.data1[index].name}<br>Age：${
          this.data1[index].age
        }<br>Address：${this.data1[index].address}`
      });
    },
    remove(index) {
      this.data1.splice(index, 1);
    },
      exportTable () {
        const exportData = [['姓名', '年龄', '地址']].concat(this.data1.map(item => Object.values(item)))
          console.log(exportData)
          const sheet = XLSX.utils.aoa_to_sheet(exportData)
          openDownloadDialog(sheet2blob(sheet), '报表.xlsx');
      }
  }
};
</script>

<style lang="less">
.basic_table_header {
  display: flex;
  margin-bottom: 20px;
  justify-content: space-between;
  .ivu-input-wrapper {
    width: 280px;
  }
  .btns {
    width: 160px;
    display: flex;
    justify-content: space-between;
  }
}
.page {
  display: flex;
  justify-content: center;
  height: 80px;
  align-items: center;
}
</style>