<template>
    <el-container>
        <el-header>
            <span>果芽练习环境</span>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <el-menu default-active="1-4-1" class="el-menu-vertical-demo">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-menu"></i>
                            <span slot="title">用例练习</span>
                        </template>
                        <el-submenu index="2">
                            <span slot="title">等价类&边界值</span>
                            <el-menu-item index="1-1" @click="one('/casePractises/1')">第一题</el-menu-item>
                            <el-menu-item index="1-2" @click="one('/casePractises/2')">第二题</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                </el-menu>

            </el-aside>
            <el-container>
                <el-main>
                    <router-view/>

                </el-main>
            </el-container>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name: "Index",
        data() {
            return {

            };
        },
        methods: {
            one:function(path){
                if(this.$route.path==path){
                    console.log(path);
                }else{
                    this.$router.push(path);
                }

            }
        }
    }
</script>

<style scoped>
    .el-header{
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        /*background-color: #1c3445;*/
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .el-main {
             /*background-color: #E9EEF3;*/
             color: #333;
             text-align: center;
             line-height: 830px;
         }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child .el-aside{
        line-height: 1000px;
    }

</style>