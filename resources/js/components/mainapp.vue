<template>
    <div>
      <!--========== ADMIN SIDE MENU one ========-->
      <div class="_1side_menu" >
        <div class="_1side_menu_logo">
          <h3 style="text-align:center;">Logo Image</h3>
          <!--<img src="/img/logo.jpg" style="width: 108px;margin-left: 68px;"/>-->
        </div>

        <!--~~~~~~~~ MENU CONTENT ~~~~~~~~-->
        <div class="_1side_menu_content">
          <div class="_1side_menu_img_name">
            <!-- <img class="_1side_menu_img" src="/pic.png" alt="" title=""> -->
            <p class="_1side_menu_name">Admin</p>
          </div>

          <!--~~~ MENU LIST ~~~~~~-->
          <div class="_1side_menu_list">
            <ul class="_1side_menu_list_ul">
              <li><a href="tags"><Icon type="ios-speedometer" /> Tags</a></li>
              <li><a href="category"><Icon type="ios-speedometer" /> Category</a></li>
              <li><a href="adminusers"><Icon type="ios-speedometer" /> Admin users</a></li>
              <li><a href="role"><Icon type="ios-speedometer" /> Role Management</a></li>
              <li><a href="assignRole"><Icon type="ios-speedometer" /> Assign role</a></li>


              <li><a href="/logout"><Icon type="ios-speedometer" /> Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
      <!--========== ADMIN SIDE MENU ========-->

      <!--========= HEADER ==========-->
      <div class="header">
        <div class="_2menu _box_shadow">
          <div class="_2menu_logo">
            <ul class="open_buthrefn">
              <li>
                <Icon type="ios-list" />
              </li>
              <!--<li><Icon type="ios-albums" /></li>-->
            </ul>
          </div>
        </div>
      </div>
      
      <div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 col-md-3">
              <div class="_1adminOverveiw_card _box_shadow _border_radious _mar_b30 _1adminOverveiw_bg_one">
                <div class="_1adminOverveiw_card_left">
                  <p class="_1adminOverveiw_card_left_num">3</p>

                  <p class="_1adminOverveiw_card_left_title">Today's News</p>
                </div>
                <div class="_1adminOverveiw_card_right">
                  <Icon type="ios-paper" />
                </div>
              </div>
            </div>

            <div class="col-12 col-md-3">
              <div class="_1adminOverveiw_card _box_shadow _border_radious _mar_b30 _1adminOverveiw_bg_two">
                <div class="_1adminOverveiw_card_left">
                  <p class="_1adminOverveiw_card_left_num">29</p>

                  <p class="_1adminOverveiw_card_left_title">Total News</p>
                </div>
                <div class="_1adminOverveiw_card_right">
                  <Icon type="ios-paper-outline" />
                </div>
              </div>
            </div>

            <div class="col-12 col-md-3">
              <div class="_1adminOverveiw_card _box_shadow _border_radious _mar_b30 _1adminOverveiw_bg_two">
                <div class="_1adminOverveiw_card_left">
                  <p class="_1adminOverveiw_card_left_num">29</p>

                  <p class="_1adminOverveiw_card_left_title">Features News</p>
                </div>
                <div class="_1adminOverveiw_card_right">
                  <Icon type="md-copy" />
                </div>
              </div>
            </div>

            <div class="col-12 col-md-3">
              <div class="_1adminOverveiw_card _box_shadow _border_radious _mar_b30 _1adminOverveiw_bg_two">
                <div class="_1adminOverveiw_card_left">
                  <p class="_1adminOverveiw_card_left_num">29</p>

                  <p class="_1adminOverveiw_card_left_title">Card News</p>
                </div>
                <div class="_1adminOverveiw_card_right">
                  <Icon type="md-list-box" />
                </div>
              </div>
            </div>
          </div>  
          <!--~~~~~~~ TABLE ONE ~~~~~~~~~-->
          <div class="_1adminOverveiw_table_recent _box_shadow _border_radious _mar_b30 _p20">
            <p class="_title0">Recent News</p>

            <div class="_overflow _table_div">
              <table class="_table">
                  <!-- TABLE TITLE -->
                <tr>
                  <th>Date</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Action</th>
                </tr>
                  <!-- TABLE TITLE -->


                  <!-- ITEMS -->
                <tr>
                  <td>25-05-19</td>
                  <td class="_table_name">Manhattan's art center "Shed" opening ceremony</td>
                  <td>Economy</td>
                  <td>
                    <button class="_btn _action_btn view_btn1" type="button">View</button>
                    <button class="_btn _action_btn edit_btn1" type="button">Edit</button>
                    <button class="_btn _action_btn make_btn2" type="button">Make Features</button>
                    <button class="_btn _action_btn make_btn3" type="button">Make Card</button>
                    <button class="_btn _action_btn make_btn1" type="button">Delete</button>
                  </td>
                </tr>
                  <!-- ITEMS -->

                  <!-- ITEMS -->
                <tr>
                  <td>25-05-19</td>
                  <td class="_table_name">Are Trump era is having an impact on what 's future voters</td>
                  <td>Social</td>
                  <td>
                    <button class="_btn _action_btn view_btn1" type="button">View</button>
                    <button class="_btn _action_btn edit_btn1" type="button">Edit</button>
                    <button class="_btn _action_btn make_btn2" type="button">Make Features</button>
                    <button class="_btn _action_btn make_btn3" type="button">Make Card</button>
                    <button class="_btn _action_btn make_btn1" type="button">Delete</button>
                  </td>
                </tr>
                  <!-- ITEMS -->

                      <!-- ITEMS -->
                <tr>
                  <td>25-05-19</td>
                  <td class="_table_name">Manhattan's art center "Shed" opening ceremony</td>
                  <td>Economy</td>
                  <td>
                    <button class="_btn _action_btn view_btn1" type="button">View</button>
                    <button class="_btn _action_btn edit_btn1" type="button">Edit</button>
                    <button class="_btn _action_btn make_btn2" type="button">Make Features</button>
                    <button class="_btn _action_btn make_btn3" type="button">Make Card</button>
                    <button class="_btn _action_btn make_btn1" type="button">Delete</button>
                  </td>
                </tr>
                  <!-- ITEMS -->

                  <!-- ITEMS -->
                <tr>
                  <td>25-05-19</td>
                  <td class="_table_name">Are Trump era is having an impact on what 's future voters</td>
                  <td>Social</td>
                  <td>
                    <button class="_btn _action_btn view_btn1" type="button">View</button>
                    <button class="_btn _action_btn edit_btn1" type="button">Edit</button>
                    <button class="_btn _action_btn make_btn2" type="button">Make Features</button>
                    <button class="_btn _action_btn make_btn3" type="button">Make Card</button>
                    <button class="_btn _action_btn make_btn1" type="button">Delete</button>
                  </td>
                </tr>
                  <!-- ITEMS -->

                  <!-- ITEMS -->
                <tr>
                  <td>25-05-19</td>
                  <td class="_table_name">Are Trump era is having an impact on what 's future voters</td>
                  <td>Social</td>
                  <td>
                    <button class="_btn _action_btn view_btn1" type="button">View</button>
                    <button class="_btn _action_btn edit_btn1" type="button">Edit</button>
                    <button class="_btn _action_btn make_btn2" type="button">Make Features</button>
                    <button class="_btn _action_btn make_btn3" type="button">Make Card</button>
                    <button class="_btn _action_btn make_btn1" type="button">Delete</button>
                  </td>
                </tr>
                  <!-- ITEMS -->


              </table>
            </div>
          </div>
           <Page :total="100" />

        </div>
      </div>
    </div>
</template>

<script>
export default {
    
}
</script>
