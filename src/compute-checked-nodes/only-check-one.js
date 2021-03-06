export default {
  methods: {
    onlyCheckOne(treeData, item) {
      this.clearAllNodes(treeData)
      this.$set(item, 'checked', item.checked === '' ? 'all' : '')
      this.$emit('change', item)
    },
    clearAllNodes(treeData) {
      this.$set(treeData, 'checked', '')
      for (let key in treeData) {
        if (typeof treeData[key] === 'object') {
          this.clearAllNodes(treeData[key])
        }
      }
    }
  }
}
