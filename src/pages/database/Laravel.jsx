export default function Laravel() {
  return (
    <pre>
      {`
# important info 
  * we can use mongo DB with laravel & eloquent by using 3rd parties

# code notes :
  * $book->isDirty('isbn') 
    - $category = new Category();  $category->name = $request->name  ;  $category->save() ;
  * use User::query()->count(); NOT DB::table('users')->count(); NOT User::count(); 

      `}
    </pre>
  );
}