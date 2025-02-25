port = os.getenv("PORT", "3000")

code_deps = [
	"src",
	"package.json",
	"pnpm-lock.yaml"
]

serve_labels = ["serve"]
test_labels = ["test"]
# queries_path = "src/lib/gql/queries.gql"

# Serve resources
local_resource(
	"dev",
	serve_cmd="pnpm dev --port {}".format(port),
	labels=serve_labels,
	links=["http://localhost:{}".format(port)],
	resource_deps=["install"]
)

# Codegen
# local_resource(
# 	"gql codegen",
# 	cmd="pnpm codegen",
# 	labels=serve_labels,
# 	resource_deps=["install"],
# 	auto_init=False,
# 	deps=[queries_path]
# )

# Test resources
local_resource(
	"lint",
	cmd="pnpm lint",
	labels=test_labels,
	deps=code_deps,
	resource_deps=["install"]
)

# Setup resources
local_resource(
	"install",
	cmd="pnpm i",
	deps=["package.json"]
)