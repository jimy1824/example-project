<template>

      <body id="BaseView" class="menu-position-side menu-side-left full-screen with-content-panel">
      <div class="all-wrapper with-side-panel solid-bg-all">
        <BaseModal></BaseModal>
        <div class="layout-w">
          <LeftSideBar></LeftSideBar>
          <div class="content-w">
            <!--------------------
            START - Top Bar
            -------------------->
            <div class="top-bar color-scheme-transparent">
              <!--------------------
              START - Top Menu Controls
              -------------------->
             <Header></Header>
              <!--------------------
              END - Top Menu Controls
              -------------------->
            </div>
            <!--------------------
            END - Top Bar
            --------------------><!--------------------
          START - Breadcrumbs
          -------------------->
                   <BBreadCrumb></BBreadCrumb>
            <!--------------------
            END - Breadcrumbs
            -------------------->
            <div class="content-panel-toggler">
              <i class="os-icon os-icon-grid-squares-22"></i><span>Sidebar</span>
            </div>
            <!--            center content  class="content-i -->
            <div class="content-i">
            <ContentPage></ContentPage>
            <RightSideBar></RightSideBar>
            </div>
            <!--            end center content-->
          </div>
        </div>
        <div class="display-type"></div>
      </div>
      </body>

</template>

<script>
  import Header from './Header';
  import Footer from './Footer';
  import RightSideBar from './RightSideBar';
  import BBreadCrumb from './Breadcrumb';
  import LeftSideBar from './LeftSidebar';
  import BaseModal from './basemodal';
  import ContentPage from './contentPage'
    export default {
        name: "BaseView",
        components: {
          Header,
          BBreadCrumb,
          BaseModal,
          LeftSideBar,
          RightSideBar,
          ContentPage,
          Footer,
      }
    }
</script>

<style scoped>

</style>
