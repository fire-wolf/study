<template>
  <div class="hello">
    <mt-button type="primary" size="large" @click.native="showActionSheet">primary</mt-button>
    <mt-button type="default" size="large" @click.native="toastFun">default</mt-button>
    <mt-actionsheet
      :actions="actions"
      v-model="sheetVisible">
    </mt-actionsheet>
  </div>
</template>

<script>
import { Toast} from 'mint-ui';
export default {
  data () {
    return {
      actions:[ {name:'拍照',method:this.tackPhoto},
                     {name:'打开相册',method:this.openAlbum}],
      sheetVisible:false,
    }
  },
  methods:{
    showActionSheet() {
      this.sheetVisible = true
    },
    tackPhoto() {
      console.log('调用拍照了')
    },
    openAlbum() {
      console.log('调用打开相册')
    },
    toastFun(){
      Toast({
        message: '操作成功',
        iconClass: 'icon icon-success'
      });
    }
  }
}
</script>

<style scoped>

</style>
