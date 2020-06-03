<template>
    <div class="title" >
        <div class="text" :style="styles">
            <span>{{contentText}}</span>
            <Tooltip>
                <span class="tip" >
                    <Icon type="help-circled" color="gray"></Icon>
                </span>
                <div slot="content" style="white-space: normal">
                    {{tipText}}
                </div>
            </Tooltip>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            fontSize: {
                type: [Number, String]
            },
            fontWeight: {
                type: [Number, String]
            },
            tipText:{
                type: String
            },
            contentText:{
                type: String
            }
        },
        data () {
            return {}
        },
        computed: {
            styles () {
                let style = {};
                if (this.fontSize) style.fontSize = `${this.fontSize}px`;
                if (this.fontWeight) style.fontWeight = `${this.fontWeight}`;
                return style;
            },
        },
        methods:{}
    }

</script>

<style lang="less" scoped>
    .title{
        .tip{
            position: relative;
            top: -5px;

        }
    }
</style>
