<template>
      <div>
        <div style="width:100px;height:200px;background:red;color:black">
            IndexDb
        </div>
        <button @click="addData">添加数据</button>
        <div class="tramsBoxs">
            <div class="transBox"></div>
            <div class="transBox"></div>
            <div class="transBox"></div>
            <div class="transBox"></div>
        </div>
      </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  mounted(){
      const request = indexedDB.open('myDatabase', 1);

      request.addEventListener('success', e => {
        console.log("连接数据库成功");
      });

      request.addEventListener('error', e => {
        console.log(e);
          console.log("连接数据库失败");
      });

  },
  methods:{
    addData(){
      const request = indexedDB.open('myDatabase');
      request.addEventListener('success', e => {
        const db = e.target.result;
        const tx = db.transaction('Users','readwrite');
        const store = tx.objectStore('Users');
          const reqAdd = store.add({'userId': 1, 'userName': '李白', 'age': 24});
          reqAdd.addEventListener('success', e => {
            console.log('保存成功')
          })
    });
    }
  }
}

</script>

<style lang="less">

</style>