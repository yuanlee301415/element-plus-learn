<template>
  <dl class="demo">
    <dt>Title</dt>
    <dd>
      <LeAlert title="Title"/>
      <LeAlert title="属性标题">插槽标题</LeAlert>
    </dd>
  </dl>

  <dl class="demo">
    <dt>Type</dt>
    <dd>
      <LeAlert title="Title"/>
      <LeAlert title="Title" type="xx"/>
      <LeAlert title="Title" type="success"/>
      <LeAlert title="Title" type="info"/>
      <LeAlert title="Title" type="warning"/>
      <LeAlert title="Title" type="error"/>
    </dd>
    <dt>切换 Type
      <select v-model="type">
        <option value="">--Change type--</option>
        <option value="success">Success</option>
        <option value="info">Info</option>
        <option value="warning">Warning</option>
        <option value="error">Error</option>
      </select>
    </dt>
    <dd>
      <LeAlert title="Title" :type="type"/>
    </dd>
  </dl>

  <dl class="demo">
    <dt>Effect</dt>
    <dd>
      <LeAlert title="Title" type="success" effect="dark"/>
      <LeAlert title="Title" type="info" effect="dark"/>
      <LeAlert title="Title" type="warning" effect="dark"/>
      <LeAlert title="Title" type="error" effect="dark"/>
    </dd>
  </dl>

  <dl class="demo">
    <dt>Close</dt>
    <dd>
      <LeAlert title="Title" @close="handleClose"/>
      <LeAlert title="Title" close-text="gotcha" @close="handleClose"/>
      <LeAlert title="Title" :closable="false"/>
    </dd>
  </dl>

  <dl class="demo">
    <dt>Icon</dt>
    <dd>
      <LeAlert title="success" type="success" show-icon/>
      <LeAlert title="info" type="info" show-icon/>
      <LeAlert title="warning" type="warning" show-icon/>
      <LeAlert title="error" type="error" show-icon/>
    </dd>
  </dl>

  <dl class="demo">
    <dt>文字居中</dt>
    <dd>
      <LeAlert title="success" type="success" show-icon center/>
      <LeAlert title="info" type="info" show-icon center/>
      <LeAlert title="warning" type="warning" show-icon center/>
      <LeAlert title="error" type="error" show-icon center/>
    </dd>
  </dl>

  <dl class="demo">
    <dt>Description</dt>
    <dd>
      <LeAlert type="success" show-icon title="Title" description="描述"/>
      <LeAlert type="warning" show-icon title="Title" description="描述"/>
      <LeAlert title="Title" description="描述"/>
      <LeAlert title="Title" description="描述-属性"><template #default>描述-插槽</template></LeAlert>
    </dd>
  </dl>

</template>

<script lang="ts" setup>
import { ref } from 'vue'
import LeAlert from '@/components/LeAlert'

const type = ref<string>('success')

function handleClose() {
  console.log('close:', arguments)
}
</script>
