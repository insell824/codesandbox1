<template>
  <div>
    <div>
      <v-btn color="red" @click="request()" :loading="isBusy" dark
        >日本語</v-btn
      >

      <div class="red">ccccc</div>
    </div>
    <div>
      {{ rawData || "-" }}
    </div>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: "あいうまみえお",
    };
  },
  layout: "default",
  components: {},
  middleware: [],
  data() {
    return {
      rawData: null,
      isBusy: false,
    };
  },
  watch: {},
  computed: {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeDestroy() {},
  methods: {
    async request() {
      if (this.isBusy) return;
      this.isBusy = true;
      try {
        const response = await this.$axios.get("/api/waiter", {
          timeout: 9 * 1000,
          validateStatus: function (status) {
            console.log("validateStatus", status);
            return status < 500;
          },
        });
        this.$set(this, "rawData", response.data);
        console.log("OK", response.status);
        console.log(Object.keys(response));
      } catch (err) {
        console.error("Error", err);
      }
      this.isBusy = false;
    },
  },
};
</script>
<style scoped>
</style>
