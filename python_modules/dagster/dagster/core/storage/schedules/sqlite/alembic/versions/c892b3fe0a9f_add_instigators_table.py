"""add instigators table

Revision ID: c892b3fe0a9f
Revises: 54666da3db5c
Create Date: 2022-03-18 16:16:21.007430

"""
from dagster.core.storage.migration.utils import create_instigators_table

# revision identifiers, used by Alembic.
revision = "c892b3fe0a9f"
down_revision = "54666da3db5c"
branch_labels = None
depends_on = None


def upgrade():
    create_instigators_table()


def downgrade():
    pass
