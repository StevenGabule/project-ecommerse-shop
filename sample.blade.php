<a 
  href="/admin/menus/delete/{{$menu->id}}" 
  class="deleteMenu"
  data-menuid="{{$menu->id}}" 
  style="margin-right:5px !important">
    <span class="fa fa-clone"></span>
</a>

@if($menu->is_customized_type == "product_page")
    <a href="/admin/menus/viewproducts/{{$menu->id}}/list" target="_blank"
        class="viewProductsMenu" data-menuid="{{$menu->id}}">
        <span class="fa fa-eye"></span> skus
    </a>
@endif

<span style="font-size:10px;float:right;margin-right:5px !important">
    @if($menu->is_shopAlllDepTemplate == 1)
        Shop All Departments Template &nbsp;
        <input 
              type="checkbox"
              class="shoAllDepTemplate"
              name="shoAllDepTemplate"
              value="{{$menu->id}}"
              style="float:right;"
              checked >
    @else
        Shop All Departments Template &nbsp;
        <input 
              type="checkbox"
              class="shoAllDepTemplate"
              name="shoAllDepTemplate"
              value="{{$menu->id}}"
              style="float:right;">
    @endif
</span>
</div>
@if(count($menu->submenus))
<ol class="dd-list">
    @foreach($menu->submenus->sortBy('menu_order') as $submenu) 1
        <li class="dd-item dd3-item" data-id="{{$submenu->id}}">
            <div class="dd-handle dd3-handle"></div>
            <div class="dd3-content">
                <a href="/admin/menu/edit-img/{{$submenu->id}}"
                    data-menuid="{{$submenu->id}}"
                    data-menuname="{{$submenu->name}}"
                    data-menutype="{{$submenu->is_customized_type}}"
                    data-src="{{(!empty($submenu->featured_image)) ? asset($submenu->featured_image) : '' }}"
                    class="viewImg" style="text-decoration: none;"> <img
                        src="{{(!empty($submenu->featured_image)) ? asset($submenu->featured_image) : asset('images/no-image.png') }}"
                        alt="" width="20px" height="20px"> </a>
                <a href="javascript:;" class="menus" data-type="text"
                    data-url="{!! url('/admin/menus/update/'.$submenu->id) !!}"
                    data-pk="{{$submenu->id}}" data-placement="right"
                    data-placeholder="Required"
                    data-original-title="{{$submenu->name}}">{{$submenu->name}} </a>
                <a href="/admin/menus/delete/{{$submenu->id}}"
                    class="deleteMenu" data-menuid="{{$submenu->id}}"><span
                        class="fa fa-trash"></span></a>
                @if($submenu->is_customized_type == "product_page")
                    <a href="/admin/menus/viewproducts/{{$submenu->id}}/list"
                        target="_blank" class="viewProductsMenu"
                        data-menuid="{{$submenu->id}}"><span
                            class="fa fa-eye"></span> skus</a>
                @endif
            </div>
            @if(count($submenu->submenus)) 2
                <ol class="dd-list">
                    @foreach($submenu->submenus->sortBy('menu_order') as $class)
                        <li class="dd-item dd3-item"
                            data-id="{{$class->id}}">
                            <div class="dd-handle dd3-handle"></div>
                            <div class="dd3-content">
                                <a href="/admin/menu/edit-img/{{$class->id}}"
                                    data-menuid="{{$class->id}}"
                                    data-menuname="{{$class->name}}"
                                    data-menutype="{{$class->is_customized_type}}"
                                    data-src="{{(!empty($class->featured_image)) ? asset($class->featured_image) : '' }}"
                                    class="viewImg"
                                    style="text-decoration: none;"> <img
                                        src="{{(!empty($class->featured_image)) ? asset($class->featured_image) : asset('images/no-image.png') }}"
                                        alt="" width="20px" height="20px">
                                </a>
                                <a href="javascript:;" class="menus"
                                    data-type="text"
                                    data-url="{!! url('/admin/menus/update/'.$class->id) !!}"
                                    data-pk="{{$class->id}}"
                                    data-placement="right"
                                    data-placeholder="Required"
                                    data-original-title="{{$class->name}}">{{$class->name}} </a>
                                <a href="/admin/menus/delete/{{$class->id}}"
                                    class="deleteMenu"
                                    data-menuid="{{$class->id}}"><span
                                        class="fa fa-trash"></span></a>
                                @if($class->is_customized_type == "product_page")
                                    <a href="/admin/menus/viewproducts/{{$class->id}}/list"
                                        target="_blank"
                                        class="viewProductsMenu"
                                        data-menuid="{{$class->id}}"><span
                                            class="fa fa-eye"></span>
                                        skus</a>
                                @endif
                            </div>
                            @if(count($class->submenus))  3
                                <ol class="dd-list">
                                    @foreach($class->submenus->sortBy('menu_order') as $subclass)
                                        <li class="dd-item dd3-item"
                                            data-id="{{$subclass->id}}">
                                            <div
                                                class="dd-handle dd3-handle"></div>
                                            <div class="dd3-content">
                                                <a href="/admin/menu/edit-img/{{$subclass->id}}"
                                                    data-menuid="{{$subclass->id}}"
                                                    data-menuname="{{$subclass->name}}"
                                                    data-menutype="{{$subclass->is_customized_type}}"
                                                    data-src="{{(!empty($subclass->featured_image)) ? asset($subclass->featured_image) : '' }}"
                                                    class="viewImg"
                                                    style="text-decoration: none;">
                                                    <img
                                                        src="{{(!empty($subclass->featured_image)) ? asset($subclass->featured_image) : asset('images/no-image.png') }}"
                                                        alt="" width="20px"
                                                        height="20px"> </a>
                                                <a href="javascript:;"
                                                    class="menus"
                                                    data-type="text"
                                                    data-url="{!! url('/admin/menus/update/'.$subclass->id) !!}"
                                                    data-pk="{{$subclass->id}}"
                                                    data-placement="right"
                                                    data-placeholder="Required"
                                                    data-original-title="{{$subclass->name}}">{{$subclass->name}} </a>
                                                <a href="/admin/menus/delete/{{$subclass->id}}"
                                                    class="deleteMenu"
                                                    data-menuid="{{$subclass->id}}"><span
                                                        class="fa fa-trash"></span></a>
                                                @if($subclass->is_customized_type == "product_page")
                                                    <a href="/admin/menus/viewproducts/{{$subclass->id}}/list"
                                                        target="_blank"
                                                        class="viewProductsMenu"
                                                        data-menuid="{{$subclass->id}}"><span
                                                            class="fa fa-eye"></span>
                                                        skus</a>
                                                @endif
                                            </div>

                                            @if(count($subclass->submenus)) 4
                                                <ol class="dd-list">
                                                    @foreach($subclass->submenus->sortBy('menu_order') as $subclasslast)
                                                        <li class="dd-item dd3-item"
                                                            data-id="{{$subclasslast->id}}">
                                                            <div
                                                                class="dd-handle dd3-handle"></div>
                                                            <div
                                                                class="dd3-content">
                                                                <a href="/admin/menu/edit-img/{{$subclasslast->id}}"
                                                                    data-menuid="{{$subclasslast->id}}"
                                                                    data-menuname="{{$subclasslast->name}}"
                                                                    data-menutype="{{$subclasslast->is_customized_type}}"
                                                                    data-src="{{(!empty($subclasslast->featured_image)) ? asset($subclasslast->featured_image) : '' }}"
                                                                    class="viewImg"
                                                                    style="text-decoration: none;">
                                                                    <img
                                                                        src="{{(!empty($subclasslast->featured_image)) ? asset($subclasslast->featured_image) : asset('images/no-image.png') }}"
                                                                        alt=""
                                                                        width="20px"
                                                                        height="20px">
                                                                </a>
                                                                <a href="javascript:;"
                                                                    class="menus"
                                                                    data-type="text"
                                                                    data-url="{!! url('/admin/menus/update/'.$subclasslast->id) !!}"
                                                                    data-pk="{{$subclasslast->id}}"
                                                                    data-placement="right"
                                                                    data-placeholder="Required"
                                                                    data-original-title="{{$subclasslast->name}}">{{$subclasslast->name}} </a>
                                                                <a href="/admin/menus/delete/{{$subclasslast->id}}"
                                                                    class="deleteMenu"
                                                                    data-menuid="{{$subclasslast->id}}"><span
                                                                        class="fa fa-trash"></span></a>
                                                            </div>
                                                        </li>
                                                    @endforeach
                                                </ol>
                                            @endif
                                        </li>
                                    @endforeach
                                </ol>
                            @endif
                        </li>
                    @endforeach
                </ol>
            @endif
        </li>
    @endforeach
</ol>
@endif