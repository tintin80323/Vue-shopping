<template>
  <div>
    <loading :active.sync="isLoading" :is-full-page="true">       
        <template slot="default">
         <img src="../assets/img/AS000712_01.gif">
        </template>     
    </loading>

    <div class="text-right">
      <button class="btn btn-primary mt-4" @click="openModal(true)">
        add New Coupon
      </button>
    </div>

     <table class="table mt-4">
      <thead>
        <tr>
          <th>名稱</th>
          <th>優惠碼</th>
          <th>折扣百分比</th>
          <th>到期日</th>
          <th>是否啟用</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, key) in coupons" :key="key">
          <td>{{ item.title }}</td>
          <td>{{item.code}}</td>
          <td>{{ item.percent }}</td>
          <td class="text-center">{{ item.due_date}}</td>
          <td>
            <span v-if="item.is_enabled" class="text-success">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <button class="btn btn-outline-primary btn-sm "  @click="openDelCouponModal(item)" >刪除</button>
            <button class="btn btn-outline-primary btn-sm" @click="openModal(false, item)">編輯</button>
          </td>
        </tr>
      </tbody>
    </table>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item" :class="{'disable':!pagination.has_pre}">
          <a class="page-link" href="#" aria-label="Previous"  @click.prevent="getCoupon(pagination.current_page -1)">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item" v-for="page in pagination.total_pages" :key="page" :class="{'active':pagination.current_page===page}">
          <a class="page-link" href="#" @click.prevent="getCoupon(page)">{{page}}</a>
        </li>
       
        <li class="page-item" :class="{'disable':!pagination.has_next}">
          <a class="page-link" href="#" aria-label="Next" @click.prevent="getCoupon(pagination.current_page + 1)">
            <span aria-hidden="true" >&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>

 <!----MODAL---->

  <div class="modal fade" id="couponModal" tabindex="-1" role="dialog"
      aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>新增優惠券</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col">

                <div class="form-group">
                  <label for="title">標題</label>
                  <input type="text" class="form-control" id="title"
                    placeholder="請輸入標題" v-model="tempCoupon.title">
                </div>

                <div class="form-group">
                  <label for="title">優惠碼</label>
                  <input type="text" class="form-control" id="coupon"
                    placeholder="請輸入優惠碼" v-model="tempCoupon.code">
                </div>

                <div class="form-group">
                  <label for="title">到期日</label>
                  <input type="date" class="form-control" id="expiryDate"
                    placeholder="請輸入到期日" v-model="tempCoupon.due_date">
                </div>

                <div class="form-group">
                  <label for="title">折扣百分比</label>
                  <input type="text" class="form-control" id="percent"
                    placeholder="請輸入折扣百分比" v-model="tempCoupon.percent">
                </div>

                <div class="form-group">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox"
                      id="is_enabled" v-model="tempCoupon.is_enabled" :true-value="1" :false-value="0">
                    <label class="form-check-label" for="is_enabled">
                      是否啟用
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="updateCoupon">更新優惠券</button>
          </div>
        </div>
      </div>
    </div>

    <!----刪除 MODAL ---->

    <div
      class="modal fade"
      id="openDelCouponModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>刪除產品</span>
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span
                aria-hidden="tr                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         hue"
                >&times;</span
              >
            </button>
          </div>
          <div class="modal-body">
            是否刪除
            <strong class="text-danger">{{ tempCoupon.title }}</strong>
            商品(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-dismiss="modal"
            >
              取消
            </button>
            <button type="button" class="btn btn-danger" @click="delCoupon()">
              確認刪除
            </button>
          </div>
        </div>
      </div>
    </div>




  </div>
</template>

<script>
import $ from 'jquery'

export default{ 
  data(){  
   return{
     coupons:[],
     tempCoupon:{},
     isLoading:false,
     pagination: {},
     isNew:false,
   }
  },
  methods: {
    getCoupon(page=1){
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupons?page=${page}`;
      const vm = this;


      vm.isLoading = true;
      this.$http.get(api).then(response => {
        vm.isLoading = false;
        vm.coupons = response.data.coupons;
        vm.coupons.forEach(function(item){
          const dateTime = new Date(item.due_date).getTime();
          const timestamp=Math.floor(dateTime/1000);
          const date = new Date(timestamp*1000);
          const dateValue=[
            date.getFullYear(),
            date.getMonth()+1,
            date.getDate(),
          ]
         item.due_date=dateValue;
         vm.coupons.due_date=date;
        })
        vm.pagination = response.data.pagination;
      });
    },
    openModal(isNew, item) {
      if (isNew) {
        this.tempCoupon = {};
        this.isNew = true;
      } else {
        this.tempCoupon = Object.assign({}, item);
        this.isNew = false;
      }
      $("#couponModal").modal("show");
    },
    openDelCouponModal(item){
      this.tempCoupon=item;
      $('#openDelCouponModal').modal('show')
    },
    updateCoupon() {
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon`;
      let httpMethod = 'post';
      const vm = this;
      if(!vm.isNew){
        api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${vm.tempCoupon.id}`;
        httpMethod = 'put';
      }
      this.$http[httpMethod](api, {data: vm.tempCoupon}).then(response => {
        if(response.data.success){
          $('#couponModal').modal('hide');
          vm.getCoupon();
        }
        else{
          $('#couponModal').modal('hide');
          vm.getCoupon();
          console.log('新增失敗');
        }
      });

    },

    delCoupon(){
        const vm = this;
        const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${vm.tempCoupon.id}`;
        this.$http.delete(api).then(response=>{
          vm.coupons=response.data.coupons;
          if(response.data.success){
            $("#openDelCouponModal").modal('hide');
            vm.getCoupon();
          }else{
            $("#openDelCouponModal").modal('hide');
            vm.getCoupon();
            console.log('刪除失敗')
          }
        })
    }

  },
      created() {
      this.getCoupon();
      console.log(this.getCoupon())
    },
}



</script>