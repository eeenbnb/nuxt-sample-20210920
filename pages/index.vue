<template>
  <CommonListPearentItem>
    <CommonListChildItem>
      <CommonBoxItem>
        <p>sample text.</p>
        <template slot="outer">
          <p>sample text.</p>
        </template>
      </CommonBoxItem>
    </CommonListChildItem>

    <CommonListChildItem>
      <CommonBoxItem>
        <p>no outer item</p>
      </CommonBoxItem>
    </CommonListChildItem>

    <CommonListChildItem>
      <FormTestItem />
    </CommonListChildItem>
  </CommonListPearentItem>
</template>
